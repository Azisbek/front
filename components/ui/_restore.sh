cat > button.tsx << 'EOB'
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}})
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants>{asChild?:boolean}
const Button=React.forwardRef<HTMLButtonElement,ButtonProps>(({className,variant,size,asChild=false,...props},ref)=>{const Comp=asChild?Slot:"button";return(<Comp className={cn(buttonVariants({variant,size,className}))}ref={ref}{...props}/>)})
Button.displayName="Button"
export{Button,buttonVariants}
EOB
cat > card.tsx << 'EOC'
import * as React from "react"
import {cn} from "@/lib/utils"
const Card=React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=>(<div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm",className)}{...props}/>))
Card.displayName="Card"
const CardHeader=React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=>(<div ref={ref} className={cn("flex flex-col space-y-1.5 p-6",className)}{...props}/>))
CardHeader.displayName="CardHeader"
const CardTitle=React.forwardRef<HTMLParagraphElement,React.HTMLAttributes<HTMLHeadingElement>>(({className,...props},ref)=>(<h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight",className)}{...props}/>))
CardTitle.displayName="CardTitle"
const CardDescription=React.forwardRef<HTMLParagraphElement,React.HTMLAttributes<HTMLParagraphElement>>(({className,...props},ref)=>(<p ref={ref} className={cn("text-sm text-muted-foreground",className)}{...props}/>))
CardDescription.displayName="CardDescription"
const CardContent=React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=>(<div ref={ref} className={cn("p-6 pt-0",className)}{...props}/>))
CardContent.displayName="CardContent"
const CardFooter=React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=>(<div ref={ref} className={cn("flex items-center p-6 pt-0",className)}{...props}/>))
CardFooter.displayName="CardFooter"
export{Card,CardHeader,CardFooter,CardTitle,CardDescription,CardContent}
EOC
cat > input.tsx << 'EOI'
import * as React from "react"
import {cn} from "@/lib/utils"
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}
const Input=React.forwardRef<HTMLInputElement,InputProps>(({className,type,...props},ref)=>{return(<input type={type} className={cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",className)}ref={ref}{...props}/>)})
Input.displayName="Input"
export{Input}
EOI
cat > textarea.tsx << 'EOT'
import * as React from "react"
import {cn} from "@/lib/utils"
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{}
const Textarea=React.forwardRef<HTMLTextAreaElement,TextareaProps>(({className,...props},ref)=>{return(<textarea className={cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",className)}ref={ref}{...props}/>)})
Textarea.displayName="Textarea"
export{Textarea}
EOT
cat > label.tsx << 'EOL'
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import {cva,type VariantProps} from "class-variance-authority"
import {cn} from "@/lib/utils"
const labelVariants=cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
const Label=React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>,React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>&VariantProps<typeof labelVariants>>(({className,...props},ref)=>(<LabelPrimitive.Root ref={ref} className={cn(labelVariants(),className)}{...props}/>))
Label.displayName=LabelPrimitive.Root.displayName
export{Label}
EOL
cat > badge.tsx << 'EOBG'
import * as React from "react"
import {cva,type VariantProps} from "class-variance-authority"
import {cn} from "@/lib/utils"
const badgeVariants=cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}})
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>,VariantProps<typeof badgeVariants>{}
function Badge({className,variant,...props}:BadgeProps){return(<div className={cn(badgeVariants({variant}),className)}{...props}/>)}
export{Badge,badgeVariants}
EOBG
cat > checkbox.tsx << 'EOCB'
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import {Check} from "lucide-react"
import {cn} from "@/lib/utils"
const Checkbox=React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>,React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>(({className,...props},ref)=>(<CheckboxPrimitive.Root ref={ref} className={cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",className)}{...props}><CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}><Check className="h-4 w-4"/></CheckboxPrimitive.Indicator></CheckboxPrimitive.Root>))
Checkbox.displayName=CheckboxPrimitive.Root.displayName
export{Checkbox}
EOCB
cat > dialog.tsx << 'EOD'
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {X} from "lucide-react"
import {cn} from "@/lib/utils"
const Dialog=DialogPrimitive.Root
const DialogTrigger=DialogPrimitive.Trigger
const DialogPortal=DialogPrimitive.Portal
const DialogClose=DialogPrimitive.Close
const DialogOverlay=React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>,React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(({className,...props},ref)=>(<DialogPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80",className)}{...props}/>))
DialogOverlay.displayName=DialogPrimitive.Overlay.displayName
const DialogContent=React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>,React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({className,children,...props},ref)=>(<DialogPortal><DialogOverlay/><DialogPrimitive.Content ref={ref} className={cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",className)}{...props}>{children}<DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70"><X className="h-4 w-4"/><span className="sr-only">Close</span></DialogPrimitive.Close></DialogPrimitive.Content></DialogPortal>))
DialogContent.displayName=DialogPrimitive.Content.displayName
const DialogHeader=({className,...props}:React.HTMLAttributes<HTMLDivElement>)=>(<div className={cn("flex flex-col space-y-1.5 text-center sm:text-left",className)}{...props}/>)
DialogHeader.displayName="DialogHeader"
const DialogFooter=({className,...props}:React.HTMLAttributes<HTMLDivElement>)=>(<div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",className)}{...props}/>)
DialogFooter.displayName="DialogFooter"
const DialogTitle=React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>,React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>>(({className,...props},ref)=>(<DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight",className)}{...props}/>))
DialogTitle.displayName=DialogPrimitive.Title.displayName
const DialogDescription=React.forwardRef<React.ElementRef<typeof DialogPrimitive.Description>,React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>>(({className,...props},ref)=>(<DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground",className)}{...props}/>))
DialogDescription.displayName=DialogPrimitive.Description.displayName
export{Dialog,DialogPortal,DialogOverlay,DialogClose,DialogTrigger,DialogContent,DialogHeader,DialogFooter,DialogTitle,DialogDescription}
EOD
cat > sonner.tsx << 'EOS'
import {Toaster as Sonner} from "sonner"
type ToasterProps=React.ComponentProps<typeof Sonner>
const Toaster=({...props}:ToasterProps)=>{return(<Sonner className="toaster group" toastOptions={{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}}{...props}/>)}
export{Toaster}
EOS
