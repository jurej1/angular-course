import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./components/course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  courses = [...COURSES];

  title = COURSES[0].description;

  startDate = new Date(2000, 0, 1);

  price = 9.99;

  rate = 0.67;

  // if there are multiple elements of same type
  // the reference is going to be done to the first one.
  @ViewChild("cardRef1", { read: ElementRef })
  card1: CourseCardComponent;

  // Type of ElementRef helping us
  @ViewChild("courseImage")
  containerDiv: ElementRef;

  performPrefetch: boolean = false;
  display: boolean = false;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<CourseCardComponent>;

  constructor() {}

  ngAfterViewInit(): void {
    // subscribinig to observables
    this.cards.changes.subscribe((cards) => console.log(cards));
    console.log(this.cards);
  }

  onCourseSelected(course: Course): void {
    console.log("containerDiv ", this.card1);
  }

  // tracking function
  // index & element of the array
  // function should return unique object
  trackCourse(index: number, course: Course) {
    return course.id;
  }

  onPrefetch() {
    this.performPrefetch = true;
  }

  onDisplay() {
    this.display = true;
  }

  onCoursesEdited() {
    // this will trigger collection modification.
    this.courses.push({
      id: 1,
      description: "Angular core deep dive",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      longDescription:
        "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: "",
      lessonsCount: 10,
    });
  }
}
