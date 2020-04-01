declare var process: Process;

interface Process {
    env: Env
}

interface Env {
    NG_APP_Axioms_Domain: string,
    NG_APP_Client_Id: string,
    NG_APP_Redirect_Uri: string,
    NG_APP_Post_Logout_Uri: string,
    NG_APP_Response_Type: string,
    NG_APP_Scope: string
}

interface GlobalEnvironment {
    process: Process
}