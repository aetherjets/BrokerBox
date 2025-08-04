import supabase from "@/db/supabase";

export async function POST(req: Request) {

    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
        return new Response(JSON.stringify({ error: 'No file found' }), { status: 400 });
    }

    const ext = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`;

    const buffer = Buffer.from(await file.arrayBuffer());

    const { data, error } = await supabase.storage
        .from('images')
        .upload(fileName, buffer, {
            contentType: file.type,
            upsert: true,
        });

    console.log("Upload result:", data);

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    const { publicUrl } = supabase.storage
        .from('images')
        .getPublicUrl(fileName).data;

    return new Response(JSON.stringify({ url: publicUrl }), { status: 200 });
}