import { LeaveType } from "./leave-type";
import { Collaborateur } from "./collaborateur";

export class Request {

   id :number;
	 startDate:Date ;	
	 endDate :Date;

	 creationDate :Date;
	nbjAbs: number;
 leaveDesc :string;
	 status :string;
	 leaveType=new LeaveType();

     collaborator= new  Collaborateur();
	
}
