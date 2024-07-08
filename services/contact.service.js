import { storageService } from "./async-storage.service"

const CONTACT_KEY = 'contactDB'

export const contactService = {
    query,
    get,
    remove,
    save
}

function query() {
    return storageService.query(CONTACT_KEY)
}
function get(id) {
    return storageService.get(CONTACT_KEY, id)
}

function remove(id) {
    return storageService.remove(CONTACT_KEY, id)
}

function save (contact){
    if (contact._id) {
        return storageService.put(CONTACT_KEY, contact)
    } else {
        return storageService.post(CONTACT_KEY, contact)
    }
   
}
