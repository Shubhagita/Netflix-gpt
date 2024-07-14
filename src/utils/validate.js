const checkValiddata=(email,password,name)=>{
 const isEmailValid=/^([a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const isPassValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
const isNameValid=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
if(!isEmailValid) return "Email is not Valid";
if(!isPassValid) return "Password is not Valid";

return null;
}
export default checkValiddata;