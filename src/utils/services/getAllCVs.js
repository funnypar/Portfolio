import supabase from "./supabase";

const getAllCVs = async () => {
    try {
        let { data: resume, error } = await supabase.from("resume").select("*");

        if (error) {
            throw error;
        }

        return resume; // Return the mentors data if successful
    } catch (error) {
        console.error("Error fetching docs:", error.message);
        return null; // Handle errors appropriately
    }
};

export default getAllCVs;
