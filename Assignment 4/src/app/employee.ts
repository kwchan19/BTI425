export class Employee{
    _id: string;
    FirstName: string;
    LastName: string;
    AddressStreet: string;
    AddressState: string;
    AddressCity: string;
    AddressZip: string;
    PhoneNum: string;
    Extension: number;
    Position:{
        _id:string;
        PositionName:string;
        PositionDescription:string;
        PositionBaseSalary:number;
        __v:number;
    };
    HireDate:string;
    SalaryBonus:number;
    __v:number;
}