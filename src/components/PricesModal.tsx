import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { products } from "@/data/products";

export default function PricesModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mr-2 px-4 py-2 rounded-full glass-pill hover:bg-white/20 text-white text-sm font-medium transition-all active:scale-95">
          Narxlar
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-[95%]">
        <DialogHeader>
          <DialogTitle>Mahsulotlar va Narxlari</DialogTitle>
          <DialogDescription>Bu yerda sayt bo'limidagi barcha mahsulotlar va ularning coin narxlari ko'rsatiladi.</DialogDescription>
        </DialogHeader>

        <div className="mt-4 max-h-[60vh] overflow-auto rounded-xl border border-white/20">
          <table className="w-full text-sm table-auto border-collapse">
            <thead className="bg-white/20 text-white sticky top-0 backdrop-blur-md">
              <tr>
                <th className="text-left px-3 py-3 border-b border-white/20">ID</th>
                <th className="text-left px-3 py-3 border-b border-white/20">Nomi</th>
                <th className="text-right px-3 py-3 border-b border-white/20">Coins</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b border-white/10 hover:bg-white/10 transition-colors">
                  <td className="px-3 py-3 align-top">{p.id}</td>
                  <td className="px-3 py-3 align-top">{p.name}</td>
                  <td className="px-3 py-3 text-right align-top">{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <button className="px-3 py-2 rounded bg-primary text-primary-foreground">Yopish</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
