export interface ICourseItem {
  id: string,
  title: string,
  date: number,
  duration: number,
  description: string,
  topRated: boolean,
}

export interface ICourseList {
  list: ICourseItem[]
}

export type CourseListType = ICourseItem[]
