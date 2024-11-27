import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent {
  courses = [...COURSES];

  title = COURSES[0].description;

  startDate = new Date(2000, 0, 1);

  price = 9.99;

  rate = 0.67;

  onCourseSelected(course: Course): void {
    console.log("app component - button clicked...", course);
  }

  // tracking function
  // index & element of the array
  // function should return unique object
  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
