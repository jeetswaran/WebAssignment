export class UserModel {
    userName: string;
    gitHubUrl?: string; 

    constructor(
        userName:string,
        gitHubUrl? : string
        )
        {
            this.userName = userName;
            this.gitHubUrl = gitHubUrl
        }
}