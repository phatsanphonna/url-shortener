import ShortenUrl from "@/types/ShortenURL.type";
import supabase from "./app";

export async function insertShortenUrl(shortenUrl: ShortenUrl): Promise<any> {
    return await supabase.from('shorten_url').insert(shortenUrl, { returning: 'minimal' })
}

export async function findShortenUrl(shortenString: string | string[]): Promise<any> {
    return await supabase.from('shorten_url').select('*').eq('shorten_string', shortenString).select().single()
}