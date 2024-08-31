import {MongoClient} from 'mongodb'
let mongoClient;
let clientPromise;
if(!clientPromise){
     mongoClient=new MongoClient("mongodb+srv:admin:admin1234@cluster0.27ofse5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
     clientPromise=mongoClient.connect()}
     export default clientPromise;