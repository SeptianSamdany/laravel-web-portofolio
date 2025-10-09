import { Link } from "@inertiajs/react";

export default function Home() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">🏠 Home Page</h1>
            <p>Ini halaman utama yang dirender via Inertia + React.</p>
            <Link
                href="/about"
                className="text-blue-500 hover:underline block mt-4"
            >
                Pergi ke About Page →
            </Link>
        </div>
    );
}
