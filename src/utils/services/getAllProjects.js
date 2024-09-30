import supabase from "./supabase";

const getAllProjects = async () => {
    try {
        let { data: projects, error } = await supabase
            .from("projects")
            .select("*");

        if (error) {
            throw error;
        }

        return projects; // Return the mentors data if successful
    } catch (error) {
        console.error("Error fetching projects:", error.message);
        return null; // Handle errors appropriately
    }
};

export default getAllProjects;
