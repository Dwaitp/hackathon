// src/lib/volunteer.ts
export const fetchVolunteerOpportunities = async (searchTerm, lat, lon) => {
    try {
        const response = await fetch(`https://www.volunteerconnector.org/api/search/?search=${searchTerm}&lat=${lat}&lon=${lon}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching volunteer data:', error);
        return [];
    }
};