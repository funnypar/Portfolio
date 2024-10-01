import supabase from "./supabase";

const getAllDocs = async () => {
    try {
        let { data: docs, error } = await supabase.from("docs").select("*");

        if (error) {
            throw error;
        }

        return docs; // Return the mentors data if successful
    } catch (error) {
        console.error("Error fetching docs:", error.message);
        return null; // Handle errors appropriately
    }
};

export default getAllDocs;
