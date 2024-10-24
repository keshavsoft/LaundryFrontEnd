import {StartFunc as StartFuncPostFetch} from "../PostFetch/Entry.js";
let StartFunc = async () => {
    const { value: formValues } = await Swal.fire({
        title: "Enter your credentials",
        html: `
        <input id="swal-username" class="swal2-input" placeholder="Username">
        <input id="swal-password" type="password" class="swal2-input" placeholder="Password" maxlength="10" autocapitalize="off" autocorrect="off">
      `,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-username").value,
                document.getElementById("swal-password").value
            ];
        }
    });

    if (formValues) {
        const [username, password] = formValues;
        await StartFuncPostFetch({ inUserName: username, inPassword: password });
        // Swal.fire(`Username: ${username}, Password: ${password}`);
    }
};

export { StartFunc };