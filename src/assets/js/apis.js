import {request} from "../../helpers/utils";

export async function getRisks() {
    try {
        const res = await request.get('risks-fields/');
        return res
    } catch (e) {
        // Error
    }

}
