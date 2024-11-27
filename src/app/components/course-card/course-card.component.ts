import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course } from "src/app/model/course";

@Component({
  selector: "course-card", // html tag of the app
  imports: [],
  templateUrl: "./course-card.component.html", // template file
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements OnInit {
  @Input({
    required: true,
  })
  course: Course;

  // Event emitter with the Course type
  @Output()
  courseSelected = new EventEmitter<Course>();

  ngOnInit(): void {}

  onCourseViewed(course: Course): void {
    console.log("card component - button clicked");

    //emits a custom event
    // emits -> odda -> sends a custom event
    this.courseSelected.emit(this.course);
  }
}
