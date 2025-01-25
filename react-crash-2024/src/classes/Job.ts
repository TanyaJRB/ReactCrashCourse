export type Job = {
    id: number | string;
    type: string;
    title: string;
    description: string;
    salary: string;
    location: string;
    company: JobCompany;
}

export type JobCompany = {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
}

