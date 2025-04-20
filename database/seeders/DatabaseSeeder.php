<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Ali',
            'email' => 'ali@example.com',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => now(), // Changed from time() to now()
        ]);

        Project::factory()
            ->count(30)
            ->hasTasks(30) // Ensure this method exists in your factory
            ->create();
    }
}
