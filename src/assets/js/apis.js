import {request} from "../../helpers/utils";
import toastr from 'toastr';

export async function getRisks() {
    try {
        const res = await request.get('risks-fields/');
        return res
    } catch (e) {
        toastr.error("Something went wrong")
        // Error
    }

}
