const songDatabase = {
  hindi: {
    sad: ["Tujhe Bhula Diya", "Agar Tum Saath Ho", "Phir Le Aaya Dil"],
    happy: ["Desi Girl", "Gallan Goodiyan", "Kar Gayi Chull"],
    lofi: ["Lofi Flip - Tum Mile", "Lofi - Kaise Hua", "Shayad (Lofi)"]
  },
  english: {
    sad: ["Someone Like You - Adele", "Let Her Go - Passenger"],
    happy: ["Happy - Pharrell", "On Top of the World - Imagine Dragons"],
    lofi: ["Soft Rain - Chillhop", "Better Days - NEIKED"]
  }
};

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const mood = searchParams.get("mood")?.toLowerCase();
  const lang = searchParams.get("lang")?.toLowerCase();

  if (!mood || !lang) {
    return Response.json(
      { error: "Both mood and language are required" },
      { status: 400 }
    );
  }

  const songs = songDatabase[lang]?.[mood];

  if (!songs) {
    return Response.json(
      { error: "No songs found for that mood and language" },
      { status: 404 }
    );
  }

  return Response.json({ success: true, songs });
}
