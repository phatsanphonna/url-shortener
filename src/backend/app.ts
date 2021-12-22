import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cxndyrebnlrxuxfynhty.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDE0MDEyOCwiZXhwIjoxOTU1NzE2MTI4fQ.OyC1yqqwVhI4naffn488WitQhuktY0wjQd5E5e1x-oA'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase