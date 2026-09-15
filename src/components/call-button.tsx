import { Phone } from "lucide-react";
import { toast } from "sonner";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CallButton({
  tel,
  label,
  variant = "emergency",
  size = "lg",
  className,
}: {
  tel: string;
  label: string;
  variant?: "emergency" | "default" | "outline";
  size?: "default" | "lg" | "xl";
  className?: string;
}) {
  return (
    <a href={`tel:${tel}`} className={cn(buttonVariants({ variant, size }), className)}>
      <Phone className="size-4" />
      {label}
    </a>
  );
}

export function CopyNumber({ number }: { number: string }) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={() => {
        void navigator.clipboard.writeText(number).then(
          () => toast("Nomor disalin"),
          () => toast("Tidak bisa menyalin"),
        );
      }}
    >
      Salin
    </Button>
  );
}
