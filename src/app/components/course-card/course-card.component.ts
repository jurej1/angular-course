import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course } from "src/app/model/course";

@Component({
  selector: "course-card", // html tag of the app
  imports: [CommonModule],
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

  @Input({ required: true })
  index: number;

  ngOnInit(): void {}

  onCourseViewed(): void {
    console.log("card component - button clicked");

    //emits a custom event
    // emits -> odda -> sends a custom event
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == "BEGINNER") {
      return "beginner";
    }
  }

  cardStyles() {
    return { "background-image": "url(" + this.course.iconUrl + ")" };
  }
}
