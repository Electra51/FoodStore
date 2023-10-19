export default function Pagination({ length, page, setPage }) {
    const total_pages = Math.ceil(parseInt(length) / 4);

    return (
        <div className="mt-8 flex flex-wrap justify-center items-center gap-2">
            <button
                className="hover:text-[#ef8e33] p-4 inline-flex items-center gap-2"
                onClick={() => setPage(page - 1)}
                disabled={page === 0}
            >
                <span>«</span>
                <span>Previous</span>
            </button>

            {[...Array(total_pages)].map((a, idx) => (
                <button
                    key={idx}
                    onClick={() => setPage(idx)}
                    className={`w-10 h-10 rounded-full ${page === idx ? "bg-[#ef8e33] text-background" : "border border-[#ef8e33]"}`}
                >
                    {idx + 1}
                </button>
            ))}
            <button
                className="hover:text-[#ef8e33] p-4 inline-flex items-center gap-2"
                onClick={() => setPage(page + 1)}
                disabled={page === total_pages - 1}
            >
                <span>Next</span>
                <span>»</span>
            </button>
        </div>
    );
}