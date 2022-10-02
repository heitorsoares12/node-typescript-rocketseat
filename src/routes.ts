import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response){

    CreateCourseService.execute({
        name: "NodeJs", 
        duration: 10, 
        educator: "Heitor"
    });

    CreateCourseService.execute({
        name: "Angular", 
        educator: "Heitor"
    });

    return response.send()
}