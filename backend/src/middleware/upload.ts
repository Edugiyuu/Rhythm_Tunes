// lib para gerenciar uploads de arquivos
import multer from 'multer';

/**
 * Configuração do armazenamento:
 * - memoryStorage(): mantém os arquivos na memória RAM
 * - não salva arquivos no disco
 */
const storage = multer.memoryStorage();

/**
 * Inicializa o multer:
 * - Passa a configuração de armazenamento
 * - Prepara o middleware para processar arquivos
 */
const upload = multer({ storage });


/*  Configura os campos de arquivo aceitos:
 maxCount: 1 - permite apenas 1 arquivo por campo */
 
export const uploadFields = upload.fields([
    { name: 'music', maxCount: 1 },
    { name: 'instrumental', maxCount: 1 }
]);

// Exporta o middleware configurado
export default upload;
