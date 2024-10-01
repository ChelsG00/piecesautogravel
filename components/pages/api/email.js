export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Parse the request body
            const { name, email, message } = req.body;
            
            // You can process the data here (e.g., send an email, save to a database, etc.)

            // For now, just log the data to the console
            console.log('Data received:', { name, email, message });

            // Send a success response
            res.status(200).json({ message: 'Data received successfully' });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        // Handle any non-POST requests
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
