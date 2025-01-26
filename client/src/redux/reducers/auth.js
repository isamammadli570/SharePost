const authReducer = (state = { auth: null }, action) => {
  switch (action.type) {
    case "REGISTER":
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return {
        ...state,
        auth: action.payload, // Qeydiyyat etdikde auth melumatını state-de saxlayır
      };

    case "LOGIN":
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return {
        ...state,
        auth: action.payload, // Giris etdikde auth melumatını state-de saxlayır
      };

    case "LOGOUT":
      localStorage.clear(); // Cixis etdikde localStorage-deki auth melumatlarını silir
      return {
        ...state,
        auth: null, 
      };

    default:
      return state;
  }
};

export default authReducer;
