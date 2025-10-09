import { Link } from "@inertiajs/react";

export default function About() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">ℹ️ About Page</h1>
            <p>Halaman ini juga dirender melalui Inertia + React.</p>
            <Link
                href="/"
                className="text-blue-500 hover:underline block mt-4"
            >
                ← Kembali ke Home
            </Link>
        </div>
    );
}
