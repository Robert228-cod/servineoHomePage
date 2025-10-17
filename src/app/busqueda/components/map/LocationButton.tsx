"use client";

interface LocationButtonProps {
  onClick: () => void;
}

export default function LocationButton({ onClick }: LocationButtonProps) {
  return (
    <button onClick={onClick}>
      Tu ubicación
    </button>
  );
}
