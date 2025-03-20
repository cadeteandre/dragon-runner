import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface RunHistoryTableProps {
  limit?: number
}

export default function RunHistoryTable({ limit }: RunHistoryTableProps) {
  // Mock data - in a real app, this would come from your database
  const runs = [
    {
      id: 1,
      date: "2023-09-15",
      time: "07:30",
      distance: 5.2,
      duration: 28,
      calories: 320,
      pace: "5:23",
    },
    {
      id: 2,
      date: "2023-09-13",
      time: "18:15",
      distance: 3.8,
      duration: 22,
      calories: 240,
      pace: "5:47",
    },
    {
      id: 3,
      date: "2023-09-10",
      time: "08:00",
      distance: 10.0,
      duration: 58,
      calories: 620,
      pace: "5:48",
    },
    {
      id: 4,
      date: "2023-09-07",
      time: "19:30",
      distance: 4.5,
      duration: 25,
      calories: 280,
      pace: "5:33",
    },
    {
      id: 5,
      date: "2023-09-05",
      time: "06:45",
      distance: 6.2,
      duration: 35,
      calories: 380,
      pace: "5:39",
    },
    {
      id: 6,
      date: "2023-09-02",
      time: "17:00",
      distance: 8.4,
      duration: 48,
      calories: 510,
      pace: "5:43",
    },
    {
      id: 7,
      date: "2023-08-30",
      time: "07:15",
      distance: 5.0,
      duration: 29,
      calories: 310,
      pace: "5:48",
    },
  ]

  const displayRuns = limit ? runs.slice(0, limit) : runs

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Distance (km)</TableHead>
          <TableHead>Duration (min)</TableHead>
          <TableHead>Calories (kcal)</TableHead>
          <TableHead>Pace (min/km)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {displayRuns.map((run) => (
          <TableRow key={run.id}>
            <TableCell>{run.date}</TableCell>
            <TableCell>{run.time}</TableCell>
            <TableCell>{run.distance}</TableCell>
            <TableCell>{run.duration}</TableCell>
            <TableCell>{run.calories}</TableCell>
            <TableCell>{run.pace}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

