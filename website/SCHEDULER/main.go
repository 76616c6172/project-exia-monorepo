package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"syscall"

	"project-exia-monorepo/website/exapi"
	"project-exia-monorepo/website/exdb"

	"github.com/google/uuid"
)

const WEBSERVER_PORT = ":8091" // Scheduler is listening on this port
var SECRET string

// GPU_WORERS register themselves with the scheduler through this endpoint
func api_0_registration(w http.ResponseWriter, r *http.Request) {

	registrationSecret, err := r.Cookie("secret")
	if err != nil {
		log.Println("Error reading secret cookie: ", err)
	}
	fmt.Println(registrationSecret.Value)

	if registrationSecret.Value == SECRET {
		newWorkerId := uuid.New().String()
		fmt.Println("New worker ID created:", newWorkerId)

		// Store the following worker features in workerdb
		// worker_uid
		// worker_ip "127.0.0.1:9080"
		// worker_busy true/false
		// worker_gpu_type "v100"
		// worker_current_job "jobid"
		err := exdb.RegisterNewWorker(newWorkerId)
		if err != nil {
			log.Println("Error registering worker:", err)
			return
		}

		fmt.Println("Registration successful")

	}
}

// Scheduler listens on /api/0/scheduler for workerRegistrationForms
func api_0_scheduler(w http.ResponseWriter, r *http.Request) {
	var jobResponse exapi.Job //  TODO Get this Job from the db instead
	jobResponse.Prompt = "Panorama photo of an intricate wizzards tower on mount everest, dark elf gothic arthitecture, trending on arstation, 3d photorealistic materials,"
	jobResponse.Job_params = ""
	jobResponse.Secret = SECRET

	// define the struct for the response
	var form exapi.WorkerRegistrationForm  // holds the request from the client
	jsonDecoder := json.NewDecoder(r.Body) // Read the request
	err := jsonDecoder.Decode(&form)       // Store the request in workerRegistrationForm
	if err != nil {
		log.Println(err) // maybe handle this better
		return
	}

	if form.Secret == SECRET {

		json.NewEncoder(w).Encode(jobResponse) // send back the response
	}

	fmt.Println("Sent Job: ", jobResponse.Prompt)
}

// Keeps the scheduler running until CTRL-C or exit signal is received.
func KeepSchedulerRunningUntilExitSignalIsReceived() {
	fmt.Println("Scheduler is running..")
	channel := make(chan os.Signal, 1) // keep the scheduler running until CTRL-C
	signal.Notify(channel, syscall.SIGINT, syscall.SIGTERM, os.Interrupt, os.Kill)
	<-channel
	fmt.Println("scheduler closed gracefully")
}

// Initalizes/creates the log file as needed.
func InitializeLogFile() {
	logFile, err := os.OpenFile(("./logs/scheduler.log"), os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		log.Fatal("main: error opening logfile")
	}
	defer logFile.Close()
	log.SetOutput(logFile)
}

func main() {

	if len(os.Args) < 2 || len(os.Args) > 2 { // Check to make sure a bot auth token was supplied on startup
		fmt.Println("Error: You must supply EXACTLY one argument (the GPU_WORER auth token) on startup.")
		os.Exit(1)
	}
	SECRET = strings.TrimSpace(os.Args[1])

	InitializeLogFile()
	exdb.InitializeWorkerdb()
	exdb.InitializeJobdb()

	http.HandleFunc("/api/0/scheduler", api_0_scheduler)
	http.HandleFunc("/api/0/registration", api_0_registration)

	go http.ListenAndServe(WEBSERVER_PORT, nil)

	// Run some kind of loop here to check if jobs have been processing for a long time
	// if so set them back to queued.
	//exdb.EntryPointForTesting()

	KeepSchedulerRunningUntilExitSignalIsReceived()
}
