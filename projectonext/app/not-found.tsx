"use client";

import Link from "next/link";
import { FiArrowLeft, FiCompass, FiHome } from "react-icons/fi";

export default function NotFound() {
    return (
        <main className="relative flex min-h-[calc(100vh-81px)] items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-cyan-700 px-6 py-20 text-white">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[48px_48px] opacity-20" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-cyan-200/30 sm:h-96 sm:w-96" />
            <div className="pointer-events-none absolute -bottom-40 -left-28 h-80 w-80 rounded-full border border-blue-200/20 sm:h-112 sm:w-md" />

            <section className="relative z-10 max-w-2xl text-center">
                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-200/30 bg-white/10 shadow-2xl shadow-cyan-950/40 backdrop-blur-sm">
                    <FiCompass className="h-8 w-8 text-cyan-200" aria-hidden="true" />
                </div>
                <p className="font-mono text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">
                    Error 404
                </p>
                <h1 className="mt-3 bg-linear-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-8xl font-black leading-none text-transparent sm:text-[10rem]">
                    404
                </h1>
                <h2 className="mt-5 text-2xl font-bold sm:text-3xl">Looks like you drifted off course.</h2>
                <p className="mx-auto mt-4 max-w-md text-base leading-7 text-blue-100/75">
                    The page you are looking for does not exist or may have moved. Let&apos;s get you back to something useful.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-blue-950"
                    >
                        <FiHome aria-hidden="true" />
                        Back to home
                    </Link>
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-blue-950"
                    >
                        <FiArrowLeft aria-hidden="true" />
                        Go back
                    </button>
                </div>
            </section>
        </main>
    );
}