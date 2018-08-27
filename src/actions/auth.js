import Api from '../../server/Api';

export const error = (msg) => ({
    type: 'ERROR',
    msg
  });

export const login = ({UserName,FirstName,LastName,Age,PhoneNumber,PicturePath,Password,Email,ID} = {}) => ({
    type: 'LOGIN',
    UserName,
    FirstName,
    LastName,
    Age,
    PhoneNumber,
    PicturePath,
    Password,
    Email,
    ID
  });


export const startLogin = (userName,password) => {
    return (dispatch) => {

      return Api.post("Login",{userName,password}).then((Response) => {

        const user = JSON.parse(Response.data.d);
        debugger;
        if(user != null) {

            dispatch(login(user));
        }
        else {
          dispatch(error('Error email or password.'));
        }
      }).catch((error) => {
        console.log(error);
      })
  };
  };

