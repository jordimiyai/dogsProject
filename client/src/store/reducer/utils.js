import { validate as uuidValidate } from 'uuid';

export default function isOriginal(id){
    return id.length <= 15 ? 'created' : 'original'; 
}
