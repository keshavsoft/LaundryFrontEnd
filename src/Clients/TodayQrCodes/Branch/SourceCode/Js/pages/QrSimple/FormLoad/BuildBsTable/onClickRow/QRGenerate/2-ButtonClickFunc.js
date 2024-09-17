import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";

let StartFunc = async ({ inRowData }) => {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok',
        focusCancel: true,
        focusButtonColor: "#0000ff"
    }).then((result) => {
        if (result.isConfirmed) {
            if (StartFuncCheckBeforeFetch()) {
                StartFuncFetchFunc({ inRowData }).then(ResponseData => {

                });

            };
        }
    });


};

export { StartFunc };