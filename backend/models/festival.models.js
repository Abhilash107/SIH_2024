import mongoose from 'mongoose';

const festivalSchema = new mongoose.Schema( {
    festivalName: String,
    location: String,
    description: String,
    origin: String,
    rituals: String,
    food: String,
    stories: String,
    similarFestivals: String,
    revivalEfforts: String,
    reasonForDecline: String,
    pictures: String,
    travelInfo: String,
    accommodation: String,
    localAttractions: String,
    localAmusement: String,
    culturalEtiquette: String
},{collection: "festivals"})
 
  
const Festival = mongoose.model('Festival', festivalSchema);
export  {Festival};