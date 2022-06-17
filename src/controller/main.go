package main

import (
	"exia/controller/xapi"
	"exia/controller/xdb"
	_ "exia/controller/xdb"
	"log"
	"os"

	"net/http"
)

const WEBSERVER_PORT = ":8080"

// Answers calls to the endpoint /api/0/jobs
func api_0_jobs(w http.ResponseWriter, r *http.Request) {
	//w.Header().Set("Access-Control-Allow-Origin", r.Header.Get("Origin")) // No longer needed
	w.Header().Set("Access-Control-Allow-Origin", "*")  // TESTING: allow CORS for testing purposes
	w.Header().Set("Access-Control-Allow-Headers", "*") //FIXME because I don't get it

	switch r.Method {
	case "GET": // Return info about existing jobs (I would like to make this GET but the frontend requires POST)
		xapi.HandleJobsApiGet(w, r)
	case "POST": // take in new jobs
		xapi.HandleJobsApiPost(w, r)
		// TODO: deal with accepting new jobs
	}
}

// Answers calls to the endpoint /api/0/img
// TODO: requires a jobid and sends back the latest image for that job id.
func api_0_img(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")  // TESTING: allow CORS for testing purposes
	w.Header().Set("Access-Control-Allow-Headers", "*") //FIXME because I don't get it
	xapi.HandleImgRequests(w, r)                        // TODO: Return the correct image based on the request (request with jobid)
}

// Answers calls to the endpoint /api/0/all
// This answers with a json containing all information the view needs when it first loads
func api_0_status(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")  // TESTING: allow CORS for testing purposes
	w.Header().Set("Access-Control-Allow-Headers", "*") //FIXME because I don't get it
	xapi.HandleStatusRequest(w, r)
}

// This is the main function :D
func main() {
	// Initialize the jobs database
	xdb.JobdbInit()

	// Select the logfile
	logFile, err := os.OpenFile(("./logs/exia.log"), os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		log.Fatal("main: error opening logfile")
	}
	defer logFile.Close()
	log.SetOutput(logFile)

	// TESTING: Play with SQLite
	//xdb.EntryPointForTesting() //testing

	// Handle requests for assets, everything in ../view/dist is accessible to the public
	http.Handle("/", http.FileServer(http.Dir("../view/dist"))) //serves requests to www.url/assets/

	// Handle API endpoints
	http.HandleFunc("/api/0/status", api_0_status) // registers api_0_status() as the handler for "/api/0/status"
	http.HandleFunc("/api/0/jobs", api_0_jobs)
	http.HandleFunc("/api/0/img", api_0_img)

	// Run the webserver
	http.ListenAndServe(WEBSERVER_PORT, nil)
}