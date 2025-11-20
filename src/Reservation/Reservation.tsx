import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Loader from "@/Loader/Loader";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner"; 
import { CircleX } from "lucide-react";
import bgVillaCard from "../Projects/svg.png"
import { motion } from "motion/react";
import { z } from "zod";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

// ⭐ Zod schema: change therapist -> project
const reservationSchema = z.object({
  date: z.date().nullable().refine(v => v !== null, {
    message: "Please select a date",
  }),
  time: z.string().min(1, "Please select a time"),
  project: z.string().min(1, "Please select a project"),
});

type ReservationFormType = z.infer<typeof reservationSchema>;

function Reservation() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    setError,
  } = useForm<ReservationFormType>({
    resolver: zodResolver(reservationSchema),
    mode: "onSubmit",
    defaultValues: {
      date: null,
      time: "",
      project: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ReservationFormType) => {
    setLoading(true);

    try {
      console.log("Reservation submitted:", data);
      toast.success("Reservation successful ✨");
      reset();
    } catch (err) {
      console.error(err);
      setError("root", {
        type: "server",
        message: "Something went wrong, please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0, transition: { duration: 0.3 } }}
      className="w-screen h-screen flex justify-center bg-[length:auto_50%] bg-bottom bg-no-repeat items-center"
      style={{ backgroundImage: `url(${bgVillaCard})` }}
    >
      <Card className="border-0 py-10 drop-shadow-xl w-[90%] max-w-[480px]">
        <CardHeader>
          <CardTitle className="text-center text-[20px] font-semibold text-amber-900">
            Reservation
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Root-level error */}
            {errors.root?.message && (
              <div className="flex justify-center items-center text-red-500 text-[12px]">
                <CircleX className="w-3 h-3" />
                <p className="pl-1">{errors.root.message}</p>
              </div>
            )}

            {/* Date picker */}
            <div className="space-y-1 w-full">
              <p className="text-[12px] text-amber-950 font-medium">
                Select date
              </p>

              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span className="text-gray-400">Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value ?? undefined}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />

              <p className="text-red-500 text-[12px] pl-1">
                {errors.date?.message ?? "\u00A0"}
              </p>
            </div>

            {/* Time input */}
            <div className="space-y-1 w-full">
              <p className="text-[12px] text-amber-950 font-medium">
                Select time
              </p>
              <Input
                type="time"
                {...register("time")}
                className="text-[12px] m-0 w-full"
              />
              <p className="text-red-500 text-[12px] pl-1">
                {errors.time?.message ?? "\u00A0"}
              </p>
            </div>

            {/* Project select (was therapist) */}
            <div className="space-y-1 w-full">
              <p className="text-[12px] text-amber-950 font-medium">
                Project
              </p>

              <Controller
                name="project"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className="text-[12px] w-full">
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Zenithy">Zenithy</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />

              <p className="text-red-500 text-[12px] pl-1">
                {errors.project?.message ?? "\u00A0"}
              </p>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-amber-900 text-white py-5"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-3">
                  <Loader />
                  <p>Submitting...</p>
                </div>
              ) : (
                "Reserve"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default Reservation;
