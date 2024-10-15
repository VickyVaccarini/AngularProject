export const environment = {
    production: true,
    apiUrl: (typeof window !== 'undefined' && window.env && window.env.apiUrl) 
        ? window.env.apiUrl 
        : 'http://vicky-container-back.brazilsouth.azurecontainer.io/api/employee'
};
