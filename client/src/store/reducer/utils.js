import { validate as uuidValidate } from 'uuid';

export default function isOriginal(id){
    return uuidValidate(id) ? 'created' : 'original'; 
}
