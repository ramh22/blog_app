import {MongoClient} from 'mongodb'
let mongoClient;
let clientPromise;
if(!clientPromise){
     mongoClient=new MongoClient("mongodb://localhost:27017/next.test")
     clientPromise=mongoClient.connect()}
     export default clientPromise;