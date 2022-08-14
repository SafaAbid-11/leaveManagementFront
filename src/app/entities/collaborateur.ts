import { Request } from "./request"; 

export class Collaborateur {
    id : number;

     cin :number;
	 
	 firstName :string;
	
	 lastName :string; 
	 
	 respo :string;
	 login:string;
	 password:string;
	
		 address :string ;
	StartDate :Date ;
		
		 BirthDate  :Date;
		
		  enabled :boolean;
		 
		 roles : Array<string>;
		 
		  image :string;
		 
		  PhoneNumber :string;
		 
		  yearsOfExp :number;
		 
		  notes :string;
		 
		  deletedAt:Date;
		 
		  sickBalance :number;
		  earnedBalance :number;
		 
	 leaveRequests:Array<Request>;

}
