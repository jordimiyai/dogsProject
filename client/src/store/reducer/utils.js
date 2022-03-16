import { validate as uuidValidate } from 'uuid';

export default function isOriginal(dog){
    return dog.created ? 'created' : 'original'; 
}
