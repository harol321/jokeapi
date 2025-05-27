import { supabase } from '../../supabase'; // Ajusta la ruta según la estructura de tu proyecto

async function testConexion() {
    const { data, error } = await supabase.from('chistes').select('*');
    if (error) console.error('Error:', error);
    else console.log('Conexión exitosa:', data);
}

// Ejecuta manualmente en la consola
testConexion();