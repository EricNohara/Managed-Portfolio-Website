export interface IUserData {
  id: string;
  name: string | null;
  phone_number: string | null;
  email: string;
  location: string | null;
  github_url: string | null;
  linkedin_url: string | null;
  portrait_url: string | null;
  resume_url: string | null;
  transcript_url: string | null;
  instagram_url: string | null;
  facebook_url: string | null;
  bio: string | null;
  skills: IUserSkill[];
  experiences: IUserExperience[];
  projects: IUserProject[];
  education: IUserEducation[];
}

export interface IUserSkill {
  name: string;
  proficiency: number | null;
  years_of_experience: number | null;
}

export interface IUserExperience {
  company: string;
  job_title: string;
  date_start: string | null;
  date_end: string | null;
  job_description: string | null;
}

export interface IUserProject {
  id: number;
  name: string;
  date_start: string;
  date_end: string;
  languages_used: string[] | null;
  frameworks_used: string[] | null;
  technologies_used: string[] | null;
  description: string;
  github_url: string | null;
  demo_url: string | null;
  thumbnail_url: string | null;
}

export interface IUserEducation {
  degree: string;
  majors: string[];
  minors: string[];
  gpa: number | null;
  institution: string;
  awards: string[];
  year_start: number | null;
  year_end: number | null;
  courses: ICourse[];
}

export interface ICourse {
  name: string;
  grade: string;
  description: string;
}
