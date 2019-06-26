export class Course {
    courseId: number;
    courseName: string;
    courseDescription: string;
    courseHours: number;
    courseCost: number;
    courseCategories: number [];
    courseRestrictions: number;
    courseExternalRegistration: boolean;
    courseIsFree: boolean;
    courseExternalRegistrationLink: string;

    constructor(
        courseId: number,
        courseName: string,
        courseDescription: string,
        courseHours: number,
        courseCost: number,
        courseCategories: number[],
        courseRestrictions: number,
        courseExternalRegistration: boolean,
        courseIsFree: boolean,
        coursExternalRegistrationLink: string
    ) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.courseDescription = courseDescription;
        this.courseHours = courseHours;
        this.courseCost = courseCost;
        this.courseCategories = courseCategories;
        this.courseRestrictions = courseRestrictions;
        this.courseExternalRegistration = courseExternalRegistration;
        this.courseIsFree = courseIsFree;
        this.courseExternalRegistrationLink = this.courseExternalRegistrationLink;
        }
}
